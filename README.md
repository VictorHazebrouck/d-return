# d-return

`d-return` is a lightweight utility for handling function return in a golang-ish way. It simplifies error handling by enforcing clear error definitions and ensuring TypeScript correctly infers possible return values.

## 📦 Installation

Install `d-return` via npm:

```
npm install d-return
```

or using yarn:

```
yarn add d-return
```

## 🚀 Usage

Here's an example showcasing `d-return` in action:

```typescript
import { drDispatchErr, drErr, drRes, namedError } from "d-return";

function isLongEnough(username: string) {
    if (username.length < 5) {
        return namedError("USERNAME_TOO_SHORT");
    }
}

const users: string[] = [];
function findUser(username: string) {
    if (users.includes(username)) {
        return namedError("USER_ALREADY_EXISTS");
    }
}

function createNewUser(username: string) {
    const errUserLength = isLongEnough(username);
    if (errUserLength) {
        return drDispatchErr(errUserLength);
    }

    const errUserAlreadyExists = findUser(username);
    if (errUserAlreadyExists) {
        return drDispatchErr(errUserAlreadyExists);
    }

    if (Math.random() < 0.5) {
        return drRes({
            token: Math.random(),
            username: username,
        });
    } else {
        return drErr("SOME_SERVER_ERROR");
    }
}

function main() {
    const [res, err] = createNewUser("pierre");

    if (!err) {
        console.log(res.token); // ts knows the return type in case of no errors
    } else {
        console.log(err.name);
        // ts: "USERNAME_TOO_SHORT" | "USER_ALREADY_EXISTS" | "SOME_SERVER_ERROR"
        // types are inferred bottoms-up, giving a clear overview
        // of all possible errors at a glance
    }
}
```

## 📌 Key Features

- **Type-Safe Error Handling:** Ensures TypeScript infers all possible errors.
- **Clear Error Definitions:** Uses named errors for better debugging and maintainability.
- **Easy Integration:** Works seamlessly in any TypeScript project.
