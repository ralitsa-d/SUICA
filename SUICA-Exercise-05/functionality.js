function show(){
    // 1.
    // console.log(6);
    // console.log(6.2);
    // console.log(-2);
    // console.log(6*2 - 6/2);

    // 2.
    // console.log(Math.PI);
    // console.log(Math.round(26.8));
    // console.log(Math.sqrt(4));
    // console.log(Math.sin(Math.PI/2));
    // console.log(Math.abs(-4.5));
    // console.log(Math.floor(26.8));
    // console.log(Math.abs(17-35));
    // console.log(Math.round(Math.random()*100)/100);

    // 3.
    // console.log('\"Ne  e nujno da znaesh vsichko vajnoto e da znaesh kyde da go namerish\"');
    // console.log('Albert Ainstein');
    // console.log(2000+15+'SUICA' );
    // console.log('SUICA' + 15+2000);
    // console.log('a=7, b=14, a+b = 21');
    // console.log('a=' +7+ ', b=' +14+ ', a+b=' + 21);

    // 4.
    // let str = "Ne e nujno da znaesh vsicko vajnotot e da znaesh kyde da go namerish";
    // console.log(str);
    // console.log(str[0], str[1]);
    // for(let i=5; i<9; i++)
    // {
    //     console.log(str[i]);
    // }
    // let l = str+'Albert Ainstein';
    // console.log(l);

    // 5.
    // console.log(!false);
    // console.log(5>12);
    // console.log(12>5);
    // console.log(7-12<5);

    // 6.
    // let a= 3;
    // let b=4*a;
    // let c = a+b;
    // console.log(a, b, c);
    // console.log("a = "+a+", b= "+b+", c= "+c);
    // console.log("a= "+a+", b = 4*a = 4*"+a+" = "+ b+", c= a+b = "+a+"+"+b+" = "+c);

    // 7.
    // let a =[8, 15, 23, 5, 11];
    // let b = ["червено", "зелено", "синьо", "жълто"];
    // let c = [1, 1, 1];
    // console.log(a,b,c);
    // console.log(a.length, b.length, c.length);
    // console.log(a[3]);
    // console.log(a[2] - a[4]);


    // 8. 9.
    // a.push(7, 9, 18, 8);
    // console.log(a);
    // console.log(a.length);
    // console.log(a.length - b.length);
    // for(let i=2; i<4; i++)
    // {
    //     console.log(a[i]);
    // }
    // //a.slice(2, 5);
    // for(let i=3; i<10; i++)
    // {
    //     a.pop(a[i]);
    // }
    // //a. splice(3);
    // console.log(a);
    // console.log(a.concat(c));

    // b.push('бяло', 'черно');
    // console.log(b);
    // let array = [b[4], b[1], b[0]];
    // console.log(array);

    // let masiv1 = b.slice(2,4);
    // let masiv2 = b[5];
    // let masiv3 = masiv1.concat(masiv2);
    // b=masiv3;
    // console.log(b);

    // b.sort();
    // console.log(b);
    // b.reverse();
    // console.log(b);
    
    // 10.
    // let a = {x:8, y:11, z:2};
    // console.log(a);
    // console.log(a.x+a.y);
    // a.max = Math.max(a.x, a.y, a.z);
    // a.name = "A"+a.max;
    // console.log(a.name, a.z);
    // console.log("a[z] = "+a['z']);
    // console.log("a[name] = "+a['name']);

    // 11.
    // let a = -2;
    // let b = 8;
    // let c= 16;
    // if(a>b)
    // {
    //     if(a>c)
    //     {
    //         console.log(a);
    //     }
    //     else{
    //         console.log(c);
    //     }
    // }
    // else{
    //     if(b>c)
    //     {
    //         console.log(b);
    //     }
    //     else{
    //         console.log(c);
    //     }
    // }

    // 12.
    // for(let i=1; i<10; i++)
    // {
    //     console.log(i+"*"+i+"="+i*i);
    // }

    // 13.
    // let f = function(i){
    //     console.log(Math.pow(i, 2));
    // }
    // f(7);

    // 14.
    // let x = 9;
    // let fun = Math.sqrt;
    // console.log(fun(x));

    // 15.
    for(let i=1; i<11; i++)
    {
        for(let j=1; j<11; j++)
        {
            console.log(i+"*"+j+"="+j*i);
        }
    }
}