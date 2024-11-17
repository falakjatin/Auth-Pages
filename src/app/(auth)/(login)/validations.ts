import * as yup from 'yup'

export default yup.object({
    email: yup.string().required('Email is required.').email('Enter a valid Email address.'),
    password: yup.string()
        .required('Password is required.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            `\t• Contains 1 Upper case letter
                                \t• Contains 1 Lower case letter
                                \t• Contains 1 number
                                \t• Contains 1 special character
                                \t• No space
                                \t• Minimum 8 character are required`
            ,
        ),
})
