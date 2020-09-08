module.exports = {
    email: {
        identifier: 'email',
        rules: [
            {
                type: 'empty',
                prompt: 'Email is required'
            },
            {
                type: 'email',
                prompt: 'Email is invalid'
            }
        ]
    },
    password: {
        identifier: 'password',
        rules: [
            {
                type: 'empty',
                prompt: 'Password is required'
            },
            {
                type: 'minLength[8]',
                prompt: 'Password is invalid'
            },
            {
                type: 'maxLength[16]',
                prompt: 'Password is invalid'
            }
        ]
    },
    member: {
        identifier: 'member',
        rules: [
            {
                type: 'empty',
                prompt: 'Chọn người nhận'
            }
        ]
    },
    value: {
        identifier: 'value',
        rules: [
            {
                type: 'empty',
                prompt: 'Nhập số tiền'
            }
        ]
    },
    members: {
        identifier: 'members',
        rules: [
            {
                type: 'empty',
                prompt: 'Chọn người tham gia'
            }
        ]
    },
    wordEN: {
        identifier: 'wordEN',
        rules: [
            {
                type: 'empty',
                prompt: 'This field is required'
            }
        ]
    },
    wordVN: {
        identifier: 'wordVN',
        rules: [
            {
                type: 'empty',
                prompt: 'This field is required'
            }
        ]
    },
}