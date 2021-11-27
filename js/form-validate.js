new window.JustValidate('.contacts-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: 'Недопустимый формат имени',
        tel: 'Недопустимый формат телефона'
    },
    colorWrong: '#D11616'
});