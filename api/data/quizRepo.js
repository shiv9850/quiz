const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./quiz.context");

const { endpoint, key, databaseId, containerId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

async function init() {
    await dbContext.create(client, databaseId, containerId);
}  

async function getAll() {
    console.info(`Querying container: ${containerId}`);
    const querySpec = {
        query: "SELECT * from c"
      };

      const { resources: quizzes } = await container.items
      .query(querySpec)
      .fetchAll()
      return quizzes;
}

async function getById(id,category){
    console.log(`I ${id} c: ${category}`)
    const { resource: quiz } = await container
    .item(id, category)
    .read()
    return quiz;
}

async function update(id,category,quizToupdated){
    const { resource: updatedQuiz } = await container
    .item(id, category)
    .replace(quizToupdated);
    return updatedQuiz;
}

async function deleteById(id,category){
    const { resource: result } = await container.item(id, category).delete();
    return result;
}

async function save(quizData){
    const { resource: createdQuiz } = await container.items.create(quizData);
    return createdQuiz;
}

module.exports = {
    deleteById,
    getAll,
    getById,
    init,
    save,
    update,
}