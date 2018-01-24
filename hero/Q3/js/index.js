class BaseCharacter {
constructor(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.ap = ap;
    this.alive = true;
  }

attack(character, damage) {
    if (this.alive == false) {
      return;
    }
    character.getHurt(damage);
  }

  getHurt(damage) {
      this.hp -= damage;
      if (this.hp <= 0) {
        this.die();
      }
        var _this = this;
        var i = 1;

        _this.id = setInterval(function() {
          if (i == 1) {
            _this.element.getElementsByClassName("effect-image")[0].style.display = "block";
            _this.element.getElementsByClassName("hurt-text")[0].classList.add("attacked");
            _this.element.getElementsByClassName("hurt-text")[0].textContent = damage;
          }

          _this.element.getElementsByClassName("effect-image")[0].src = 'images/effect/blade/' + i + '.png';
          i++;

          if (i > 8) {
            _this.element.getElementsByClassName("effect-image")[0].style.display = "none";
            _this.element.getElementsByClassName("hurt-text")[0].classList.remove("attacked");
            _this.element.getElementsByClassName("hurt-text")[0].textContent = "";
            clearInterval(_this.id);
          }
        }, 50);
     }

  die() {
    this.alive = false;
  }

  updateHtml(hpElement, hurtElement) {
    hpElement.textContent = this.hp;
    hurtElement.style.width = (100 - this.hp / this.maxHp * 100) + "%";
  }
}

class Hero extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    this.element = document.getElementById("hero-image-block");
    this.hpElement = document.getElementById("hero-hp");
    this.maxHpElement = document.getElementById("hero-max-hp");
    this.hurtElement = document.getElementById("hero-hp-hurt");
    this.hpElement.textContent = this.hp;
    this.maxHpElement.textContent = this.maxHp;

    console.log("召喚英雄 " + this.name + "！");
  }
  attack(character) {
    var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
    super.attack(character, Math.floor(damage));
  }
  getHurt(damage) {
  super.getHurt(damage);
  this.updateHtml(this.hpElement, this.hurtElement);
}
////////////////////回復系統///////////////////////////////
heal() {

if(this.maxHpElement.innerHTML-this.hpElement.innerHTML>=30)
{
      this.hp += 30;
}
else if(this.maxHpElement.innerHTML-this.hpElement.innerHTML<30)
{
  this.hp += this.maxHpElement.innerHTML-this.hpElement.innerHTML;
}

setTimeout(function() {
var i = 1;
var healeffect=setInterval (function() {
      document.getElementsByClassName("effect-image")[0].style.display = "block";
        document.getElementsByClassName("effect-image")[0].src = 'images/effect1/blade/' + i + '.png';
        i++;
        if(i==8){
        clearInterval(healeffect);
        document.getElementsByClassName("effect-image")[0].style.display = "none";
        }
    },40);




      document.getElementsByClassName("hurt-text")[0].classList.add("attacked");
  if(hero.maxHpElement.innerHTML-hero.hpElement.innerHTML >= 30){
      document.getElementsByClassName("hurt-text")[0].textContent = 30;
  }
else{
  document.getElementsByClassName("hurt-text")[0].textContent = hero.maxHpElement.innerHTML-hero.hpElement.innerHTML;
}
  document.getElementsByClassName("hurt-text")[0].style.color = "green";
  hero.updateHtml(hero.hpElement,hero.hurtElement);
}, 250);

setTimeout(function() {
  document.getElementsByClassName("hurt-text")[0].textContent = "";
    document.getElementsByClassName("hurt-text")[0].style.color = "red";
}, 800);

}

}

class Monster extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    this.element = document.getElementById("monster-image-block");
    this.hpElement = document.getElementById("monster-hp");
    this.maxHpElement = document.getElementById("monster-max-hp");
    this.hurtElement = document.getElementById("monster-hp-hurt");

    this.hpElement.textContent = this.hp;
    this.maxHpElement.textContent = this.maxHp;
    console.log("召喚怪物 " + this.name + "！");
  }
  attack(character) {
    var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
    super.attack(character, Math.floor(damage));
  }
  getHurt(damage) {
  super.getHurt(damage);
  this.updateHtml(this.hpElement, this.hurtElement);
}
}

var rounds = 10;
var hero = new Hero("Bernard", 130, 30);
var monster = new Monster("Skeleton", 130, 10);

function endTurn() {
  rounds--;
  document.getElementById("round-num").textContent = rounds;
  if (rounds < 1) {
 finish();
  }
}

function heroAttack() {
  // Hero 選技能時觸發回合開始+
  document.getElementsByClassName("skill-block")[0].style.display = "none";
  setTimeout(function() {

    hero.element.classList.add("attacking");
    setTimeout(function() {
      hero.attack(monster);
      hero.element.classList.remove("attacking");
    }, 500);
  }, 100);

  setTimeout(function() {
    if (monster.alive) {
      monster.element.classList.add("attacking")
      setTimeout(function() {
        monster.attack(hero);
        monster.element.classList.remove("attacking");
        endTurn();
        if (hero.alive == false) {
       finish();
        }
        else {
            document.getElementsByClassName("skill-block")[0].style.display = "block";
        }
      }, 500);
    }
    else {
       finish();
    }

  }, 1100);

}

function heal() {
  document.getElementsByClassName("skill-block")[0].style.display = "none";
  healhpElement = document.getElementById("hero-hp");
  healmaxHpElement = document.getElementById("hero-max-hp");
  if(parseInt(healmaxHpElement.innerHTML) - parseInt(healhpElement.innerHTML) ==0){
  var div = document.createElement("div");
  div.innerHTML = "無效的動作";
  var container = document.getElementById("hero-image-block");
  container.appendChild(div);
  var child = container.lastChild;
  setTimeout(function() {
  container.removeChild(child);
      document.getElementsByClassName("skill-block")[0].style.display = "block";
}, 1000);

  }
  else{
    setTimeout(function() {
        hero.heal();
        setTimeout(function() {
            monster.element.classList.add("attacking");
          }, 700);
        }, 500);

        setTimeout(function() {
          monster.attack(hero);
          setTimeout(function() {
            monster.element.classList.remove("attacking");
            endTurn();
            document.getElementsByClassName("skill-block")[0].style.display = "block";
          },250);
        },1800);

  }


}


function finish() {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "block";
  if (monster.alive == false) {
    dialog.classList.add("win");
  } else {
    dialog.classList.add("lose");
  }
}
    //  alert(parseInt(healmaxHpElement.innerHTML) - parseInt(healhpElement.innerHTML) );
