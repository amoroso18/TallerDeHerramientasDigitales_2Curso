const { Telegraf } = require('telegraf');
const axios = require('axios').default;
// codigo del bot de telegram
const bot = new Telegraf('######################################') 

const requestQuestionKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{
                text: "Perro",
                callback_data: 'Perro'
            },
            {
                text: "Gato",
                callback_data: 'Gato'
            }],
        ],
        remove_keyboard: true
    }
}
var respondiste = false;
var votacion = false;
var numeroescojer = 0;
bot.start((ctx) => {
    console.log(ctx)
    if(respondiste == false){
        ctx.reply(`😁😁😁 Bienvenido ${ctx.from.first_name}, porfavor responde la siguiente pregunta:`);
        // ctx.deleteMessage();
        setTimeout(()=>{
            numeroescojer =  Math.floor(Math.random() * (10 - 1) + 1);
            if(numeroescojer < 5){
                let animalMessage = `Presiona el perro`;
                bot.telegram.sendMessage(ctx.chat.id, animalMessage,requestQuestionKeyboard)
            }else{
                let animalMessage = `Presiona Gato`;
                bot.telegram.sendMessage(ctx.chat.id, animalMessage,requestQuestionKeyboard)
            }
        },1500)
    }else{
        ctx.reply(`Hola, ${ctx.from.first_name}`);
    }
})

bot.action('Perro', ctx => {
    if(numeroescojer < 5){
        bot.telegram.sendPhoto(ctx.chat.id, {
            source: "animals/perro1.jpg"
        })
        setTimeout(()=>{
            ctx.reply('🤗 Correcto 🥳');
        },1500)
        respondiste = true;
    }else{
        ctx.reply('Respondiste mal.');
    }
    ctx.deleteMessage();
})

bot.action('Gato', ctx => {
    if(numeroescojer >= 5){
        bot.telegram.sendPhoto(ctx.chat.id, {
            source: "animals/gato1.jpg"
        })
        setTimeout(()=>{
            ctx.reply('🤗 Correcto 🥳');
        },1500)
        respondiste = true;
    }else{
        ctx.reply('Respondiste mal.');
    }
    ctx.deleteMessage();
})

bot.on('text', ctx => {
    if(respondiste){
        respondiste = false; 
        ctx.reply(`Para iniciar una conversación presione:  /start`);
    }else{
        ctx.deleteMessage();
        ctx.reply(`Para iniciar una conversación presione:  /start`);
    }
})

bot.launch()