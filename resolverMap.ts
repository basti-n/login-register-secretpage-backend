import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`
        },
        joke(_: void, args: void): string {
            return 'Random Joke'
        }
    }
}

export default resolverMap;