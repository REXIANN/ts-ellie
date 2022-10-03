{
  class TimeoutError extends Error {
  }

  class OfflineError extends Error {
  }

  class NetworkClient {
    tryConnect() {
      throw new TimeoutError("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {
    }

    login() {
      // login...
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {
    }

    run() {
      try {
        this.userService.login();
      } catch (error) {

      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);


  const app = new App(service);
  app.run();
}