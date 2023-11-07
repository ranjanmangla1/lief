import { db } from "~/server/db";

const resolvers = {
    Query: {
      getAllInjuryReports: async (_, __, { db }) => {
        try {
          const injuryReports = await db.injuryReport.findMany();
          console.log('Retrieved injury reports:', injuryReports);
          return injuryReports;
        } catch (error) {
          console.error('Error retrieving injury reports:', error);
          throw new Error('Failed to retrieve injury reports.');
        }
      },
    },
    Mutation: {
      createUser: async (_, { input }) => {
        const { email, password } = input;
    
        try {
          const user = await db.user.create({
            data: {
              password,
              email,
            },
          });
          return user;
        } catch (error) {
          console.error("Error creating user:", error);
          throw new Error("Failed to create user.");
        }
      },
      createInjuryReport: async (_, { input }) => {
        const newInjuryReport = await db.injuryReport.create({
          data: {
            injuryDate: input.injuryDate,
            injuryTime: input.injuryTime,
            reporterName: input.reporterName,
            bodyPartInjured: input.bodyPartInjured,
          },
        });
        return newInjuryReport;
      },
    },
  };

  export default resolvers