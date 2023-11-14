// class Counter {
//     constructor(count){
//        this.count = count
//        this.button = `button${count}`
//        this.h1 = `h1${count}`
//        this.a = 0
//     }
//     getLayout =()=>{
// let h1 = document.createElement('h1')
// h1.id = this.h1
// h1.innerHTML = 0

// let button = document.createElement('button')
// button.id = this.button
// button.innerHTML ='Plus'

// let btn_ = document.createElement('button')
// btn_.id = this.button
// btn_.innerHTML ='Minus'

// let btnClean = document.createElement('button')
// btnClean.innerHTML = "Clean"


// button.addEventListener('click',this.onClick)
// btn_.addEventListener('click',this.onMinus)
// btnClean.addEventListener('click',this.Clean)

// document.body.append(btn_)
// document.body.append(button)
// document.body.append(btnClean)
// document.body.prepend(h1)
//     }
// }
    
// onClick =()=>{
// let h1 = document.getElementById(this.h1)
// let button = document.getElementById(this.button)

// h1.innerHTML = this.a++
// }
// onMinus = ()=>{
//     let h1 = document.getElementById(this.h1)
// let button = document.getElementById(this.button)
//     h1.innerHTML = this.a--
// }
// Clean =()=>{
//     let h1 = document.getElementById(this.h1)
//     h1.innerHTML = "0"
// }
    

// const con = new Counter(1)
// con.getLayout()

class Counter {
    constructor(count) {
        this.count = count;
        this.button = `button${count}`;
        this.h1 = `h1${count}`;
        this.a = 0;
    }

    getLayout() {
        let container = document.createElement('div');
        container.classList = 'main';

        let h1 = document.createElement('h1');
        h1.id = this.h1;
        h1.innerHTML = 0;

        let button = document.createElement('button');
        button.id = this.button;
        button.innerHTML = 'Plus';
        button.classList = 'plus';

        let btn_ = document.createElement('button');
        btn_.id = this.button;
        btn_.innerHTML = 'Minus';
        btn_.classList = 'minus';

        let btnClean = document.createElement('button');
        btnClean.innerHTML = "Clean";
        btnClean.classList = 'clean';

        button.addEventListener('click', this.onClick.bind(this));
        btn_.addEventListener('click', this.onMinus.bind(this));
        btnClean.addEventListener('click', this.Clean.bind(this));

        container.appendChild(h1);
        container.appendChild(btn_);
        container.appendChild(button);
        container.appendChild(btnClean);

        document.body.appendChild(container); // Добавляем контейнер на страницу
    }

    onClick() {
        let h1 = document.getElementById(this.h1);
        h1.innerHTML = this.a++;
    }

    onMinus() {
        let h1 = document.getElementById(this.h1);
        h1.innerHTML = this.a--;
    }

    Clean() {
        let h1 = document.getElementById(this.h1);
        this.a = 0;
        h1.innerHTML = "0";
    }
}

const con = new Counter(1);
con.getLayout();






