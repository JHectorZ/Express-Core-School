import { Person } from "../../infrastructure/models/person";

export class PersonFactory {

    static assignment(person: Person, fields: any) {

        if (fields.personId) {
            person.setPersonId = fields.personId;
        } else {
            person.setPersonId = undefined;
        }

        if (fields.firstName) {
            person.setFirstName = fields.firstName;
        } else {
            person.setFirstName = undefined;
        }

        if (fields.secondName) {
            person.setSecondName = fields.secondName;
        } else {
            person.setSecondName = undefined;
        }

        if (fields.lastName) {
            person.setLastName = fields.lastName;
        } else {
            person.setLastName = undefined;
        }

        if (fields.secondLastName) {
            person.setSecondLastName = fields.secondLastName;
        } else {
            person.setSecondLastName = undefined;
        }

        if (fields.age) {
            person.setAge = fields.setAge;
        } else {
            person.setAge = undefined;
        }

        if (fields.status) {
            person.setStatus = fields.status;
        } else {
            person.setStatus = undefined;
        }

        if (fields.dateRegister) {
            person.setDateRegister = fields.dateRegister;
        } else {
            person.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            person.setDateUpdate = fields.dateUpdate;
        } else {
            person.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let person = new Person()

        if (fields.personId) {
            person.setPersonId = fields.personId;
        } else {
            person.setPersonId = undefined;
        }

        if (fields.firstName) {
            person.setFirstName = fields.firstName;
        } else {
            person.setFirstName = undefined;
        }

        if (fields.secondName) {
            person.setSecondName = fields.secondName;
        } else {
            person.setSecondName = undefined;
        }

        if (fields.lastName) {
            person.setLastName = fields.lastName;
        } else {
            person.setLastName = undefined;
        }

        if (fields.secondLastName) {
            person.setSecondLastName = fields.secondLastName;
        } else {
            person.setSecondLastName = undefined;
        }

        if (fields.age) {
            person.setAge = fields.age;
        } else {
            person.setAge = undefined;
        }

        if (fields.status) {
            person.setStatus = fields.status;
        } else {
            person.setStatus = undefined;
        }

        if (fields.dateRegister) {
            person.setDateRegister = fields.dateRegister;
        } else {
            person.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            person.setDateUpdate = fields.dateUpdate;
        } else {
            person.setDateUpdate = undefined;
        }

        return person;
    }

    static toJson(person: Person) {
        return {
            personId: person.getPersonId,
            firstName: person.getFirstName,
            secondName: person.getSecondName,
            lastName: person.getLastName,
            secondLastName: person.getSecondLastName,
            age: person.getAge,
            status: person.getStatus,
            dateRegister: person.getDateRegister,
            dateUpdate: person.getDateUpdate,
        };
    }

    static checkUndefinedFields(person: Person) {
        const fields = [
            person.getFirstName,
            person.getSecondName,
            person.getLastName,
            person.getSecondLastName,
            person.getAge,
        ];

        return fields.some(field => field === undefined);
    }

}