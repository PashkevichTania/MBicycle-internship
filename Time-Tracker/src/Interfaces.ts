export interface IProject {
    userName: string,
    name: string,
    note: string,
    time: number,
};

export interface IUser {
    address: { street: string, suite: string, city: string, zipcode: string },
    company: { name: string, catchPhrase: string, bs: string }
    email: string,
    id: number
    name: string,
    phone: string,
    username: string,
    website: string,
}