
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Employee = require('./models/Employee');

const resolvers = {
    Query: {
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) throw new Error('User not found');
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) throw new Error('Invalid password');
            return user;
        },
        getAllEmployees: async () => {
            return await Employee.find();
        },
        searchEmployeeByEid: async (_, { eid }) => {
            return await Employee.findById(eid);
        },
        searchEmployeeByDesignationOrDepartment: async (_, { searchTerm }) => {
            return await Employee.find({
                $or: [
                    { designation: searchTerm },
                    { department: searchTerm }
                ]
            });
        }
    },
    Mutation: {
        signup: async (_, { username, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                username,
                email,
                password: hashedPassword,
            });
            await user.save();
            return user;
        },
        addNewEmployee: async (_, args) => {
            const employee = new Employee(args);
            await employee.save();
            return employee;
        },
        updateEmployeeByEid: async (_, { eid, ...args }) => {
            return await Employee.findByIdAndUpdate(eid, args, { new: true });
        },
        deleteEmployeeByEid: async (_, { eid }) => {
            await Employee.findByIdAndDelete(eid);
            return 'Employee deleted successfully';
        }
    }
};

module.exports = resolvers;