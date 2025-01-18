const company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};
// let a = company.sales[0].salary;
// let b = company.sales[1].salary;
// let c = company.development.web[0].salary;
// let d = company.development.web[1].salary;
// let f = company.development.internals[0].salary;
// let sum = a + b + c + d + f;

// console.log(sum);
// console.log(company.sales[1].salary);
// console.log(company.development.web[0].salary);

// Array.isArray(value);
// typeof value === "object";

// const many = {
//     name: 'John',
//     salary: 1000,
//     friend: {
//         name: 'Men',
//         salary: 900
//     }
// }

// function sumSalary(obj) {

//     let sum = 0;

//     for (let key in obj) {

//         if (key === 'salary')
//             sum += obj[key];
//         if (typeof obj[key] === 'object') {
//             sum += sumSalary(obj[key]);
//         }
//     }
//     return sum;
// }
// console.log(sumSalary(company));
// salary = 6700;

function sumSalary(obj) {

    let sum = 0;

    for (const department in obj) {

        if (Array.isArray(obj[department])) {
            for (const employee of obj[department]) {
                if (employee.salary) {
                    sum += employee.salary;
                }
            }
        } else {
            sum += sumSalary(obj[department]);
        }
    }
    return sum;
}
console.log(sumSalary(company));
// 6700