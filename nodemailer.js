const nodemailer = require('nodemailer');

module.exports.sendMail = (data, result) => {

    let content = ``;
    let goodsContent = ``;
    let total = 0;
    
    for (let i = 0; i < result.length; i++) {

        total += data.key[result[i]['id']] * result[i]['cost'];
        goodsContent+= `<tr>
                            <td style="border: 1px solid #afafaf; padding: 8px;">${result[i]['name']}</td>
                            <td style="border: 1px solid #afafaf; padding: 8px;">${result[i]['cost']} грн</td>
                            <td style="border: 1px solid #afafaf; padding: 8px;">${data.key[result[i]['id']]}шт.</td>
                            <td style="border: 1px solid #afafaf; padding: 8px;">${data.key[result[i]['id']] * result[i]['cost']} грн</td>
                        <tr>`
    }

    content = `   
                    <table style=" border-collapse: collapse; border: 1px solid #afafaf; border-radius: 6px; max-width: 600px; width: 100%; padding-left: 15px; padding-right: 15px; padding-bottom: 20px; margin: 0 auto">
                            <tr>
                                <td colspan="4" style="text-align: center"><h2>Заказ оформлен :)</h2></td>
                            </tr>
                            <tr>
                                <td colspan="4" style="text-align: center">Номер заказа: ${data.orderId}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf; width: 100%;">
                                <td colspan="3" style="padding: 10px">Имя:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.firstName}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Фамилия:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.lastName}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Город:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.city}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Email:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.mail}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Телефон:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.phone}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Почта:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.postName}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Адресс и номер отделения:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.post}</td>
                            </tr>
                            <tr style="height: 35px; border-bottom: 1px solid #afafaf">
                                <td colspan="3" style="padding: 10px">Способ оплаты:</td>
                                <td colspan="4" style="padding: 10px; float: right">${data.paymentMethod}</td>
                            </tr>
                            <tr style="height: 35px">
                                <td colspan="4" style="padding: 40px 10px">
                                    Дата/время заказа ${data.date}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 10px">
                                    Помощь по телефону 099-523-86-07
                                </td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #afafaf; padding: 8px; font-weight: 700;">Название</td>
                                <td style="border: 1px solid #afafaf; padding: 8px; font-weight: 700;">Цена</td>
                                <td style="border: 1px solid #afafaf; padding: 8px; font-weight: 700;">Количество</td>
                                <td style="border: 1px solid #afafaf; padding: 8px; font-weight: 700;">Всего</td>
                            </tr>
                            ${goodsContent}
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 10px">
                                    Всего к оплате: ${total} грн
                                </td>
                            </tr>
                        </table>`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'grigovlad09112002@gmail.com',
        pass: 'fnicsmxajtmurfbp' // naturally, replace both with your real credentials or an application-specific password
        }
    });
    
    const mailOptions = {
        from: 'vinorosend@gmail.com',
        to: `vinorosend@gmail.com, ${data.mail}`,
        subject: `Vinoro. Ваш заказ ${data.orderId} оформлен`,
        text: 'null',
        html: content
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

