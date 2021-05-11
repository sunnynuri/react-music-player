import {v4 as uuidv4} from "uuid";

 function chillhop(params) {
    
    return [
        {
            name:"By Chance" ,
            artist:"SwuM",
            cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            id:uuidv4(),
            active:true,
            color:['#283230' , '#D8AE86'],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=16061"

        },
        {
            name:"Skates" ,
            artist:"SwuM",
            cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            id:uuidv4(),
            active:false,
            color:['#283230' , '#D8AE86'],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=15225"

        },
        {
            name:"Roses n Flames" ,
            artist:"C Y G N",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            id:uuidv4(),
            active:false,
            color:['#080F2B' , '#B26CA2'],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=14984"

        }
    ]
    
}

export default chillhop;