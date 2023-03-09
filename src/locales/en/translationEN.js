const translationEN = {
    title: "Hello",
    wallet: "Wallet",
    loginForm: {
        email_matches: "Invalid email",
        email_required: "Please, enter your email",
        password_required: `Please, enter your password`,
        password_placeholder: "Password",
        signInButton: "SIGN IN",
        signUpButton: "SIGN UP",
        signInGoogle: "SIGN IN WITH<1></1>OOGLE",
            },
    registrationForm: {
        email_matches: "Invalid email",
        email_required: "Please, enter your email",
        password_required: `Please, enter your password`,
        password_min: 'At least 6 characters',
        password_max: 'Up to 16 characters',
        password_matchesFull: 'At least one uppercase and lowercase',
        password_matchesNum: 'At least one number',
        confirmPassword_oneOf:'Passwords do not match',
        confirmPassword_required:`Please, confirm your password`,
        password_placeholder: "Password",
        confirmPassword_placeholder: "Confirm password",
        firstName_placeholder: "First name",
        firstName_max: 'Up to 12 characters',
        firstName_rquired: `Please, enter your name`,
        signInButton: "SIGN IN",
        signUpButton: "SIGN UP",
        signInGoogle: "SIGN IN WITH<1></1>OOGLE",
     },
    balance:{
        your_balance:"YOUR BALANCE",
    },
    btnAddTransactions: "message",
    currency: {
        wrapError: "<p>Currency is not available now.</p><p>Please check later.</p>",
        table: {
            currency: "Currency",
            purchase: "Purchase",
            sale: "Sale",
        },
    },
    header: {
        exit: "Exit",
        modalAnswer: {
            text: "Are you sure you want to exit?",
        },
    },
    modalAddTransactions: {
        validationSchema: {
            sum_required: "Sum is required.",
            sum_max: "Up to 8 numbers",
            select_required: "Category is required.",
        },
        container: {
            title: "Add transaction",
            checkIncome: "Income",
            checkExpense: "Expense",

        },
        lableComment: {
            placeholder: "Comment",
        },
        buttonAdd: "add",
        buttonCancel: "cancel",
    },
    modalAnswer: {
        yes: "YES",
        no: "NO",
    },
    navigation: {
        navigateText: {
            home: "Home",
            statistics: "Statistics",
        },
    },
    chart: {
        notification: {
            text: "You have no transactions in selected date yet. <1/> Please add transaction or choose another date.",
        },
    },
    transaction: {
        notification: {
            text: "Hello! <1/> To get started, please add the transaction.",
        },
    },
    diagramTab: {
        tableContainer: {
            category: "Category",
            sum: "Sum",
        },
        totals: {
            expenses: "Expenses:",
            income: "Income:",
        },
    },
    statistic: {
        statisticContainer: {
            title: "Statistics",
        },
    },
    table: {
        tableHead: {
            category: {
                date: "Date",
                type: "Type",
                category: "Category",
                comment: "Comment",
                sum: "Sum",
                balance: "Balance",
                options: "Options",
            },
        },
        mobileTrPlus: {
            mobileTdTitle: {
                date: "Date",
                type: "Type",
                category: "Category",
                comment: "Comment",
                sum: "Sum",
                balance: "Balance",
                options: "Options",
            },
        },
        mobileTrMinus: {
            mobileTdTitle: {
                date: "Date",
                type: "Type",
                category: "Category",
                comment: "Comment",
                sum: "Sum",
                balance: "Balance",
                options: "Options",
            },
        },
        modalAnswer: "Are you sure you want to delete transaction?",
    },
    categories: {
        Mainexpenses: "Main expenses",
        Products: "Products",
        Car: "Car",
        Selfcare: "Self care",
        Childcare: "Child care",
        Householdproducts: "Household products",
        Education: "Education",
        Leisure: "Leisure",
        Otherexpenses: "Other expenses",
        Entertainment: "Entertainment",
    },
    reactSelect: {
        categoryPlaceholder: "Select a category",
        placeholder: "Select the required value",
    },
};

export default translationEN;
