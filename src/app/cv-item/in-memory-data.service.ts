import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cvItems = [
      {
        id: 1,
        company: "Mister Spex GmbH",
        title: "Software Engineer",
        begin: "2017-09-06",
        end: "2017-09-06",
        description: "Developing stuff ",
        tags: [],
        link: "",
      }
    ];
    return {cvItems};
  }
}
