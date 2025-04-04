const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        created_at: String!
        updated_at: String!
    }

    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        designation: String!
        salary: Float!
        date_of_joining: String!
        department: String!
        employee_photo: String
        created_at: String!
        updated_at: String!
    }

    type Query {
        login(username: String!, password: String!): User
        getAllEmployees: [Employee]
        searchEmployeeByEid(eid: ID!): Employee
        searchEmployeeByDesignationOrDepartment(searchTerm: String!): [Employee]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        addNewEmployee(
            first_name: String!,
            last_name: String!,
            email: String!,
            gender: String!,
            designation: String!,
            salary: Float!,
            date_of_joining: String!,
            department: String!,
            employee_photo: String
        ): Employee
        updateEmployeeByEid(
            eid: ID!,
            first_name: String,
            last_name: String,
            email: String,
            gender: String,
            designation: String,
            salary: Float,
            date_of_joining: String,
            department: String,
            employee_photo: String
        ): Employee
        deleteEmployeeByEid(eid: ID!): String
    }
`;

module.exports = typeDefs;
