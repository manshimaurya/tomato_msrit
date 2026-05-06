# Clone and Run the Project

## 1. Clone the repository

```bash
git clone -b work https://github.com/manshimaurya/tomato_msrit.git
```

## 2. Move into the project folder

```bash
cd tomato_msrit
```

## 3. Verify project files

```bash
ls
```

You should see:
- source code
- Dockerfiles
- configs
- package files

> Note: `auth-service.tar` is intentionally not included in the repository because GitHub blocks files larger than 100 MB.

## 4. Rebuild the auth service Docker image

```bash
docker build -t auth-service ./services/auth-service
```

## 5. (Optional) Recreate the tar file

```bash
docker save auth-service > services/auth-service/auth-service.tar
```

## 6. Run the project

### Using Docker Compose

```bash
docker compose up --build
```

or

```bash
docker-compose up --build
```

### Using Node.js

Install dependencies:

```bash
npm install
```

Start the project:

```bash
npm start
```

or

```bash
npm run dev
```

---

# Important Note

The file:

```text
services/auth-service/auth-service.tar
```
was removed from Git history because it exceeded GitHub's 100 MB file size limit.
It is a generated build artifact and should be recreated locally using Docker instead of being stored in Git.
was removed from Git history because it exceeded GitHub's 100 MB file size limit.

It is a generated build artifact and should be recreated locally using Docker instead of being stored in Git.
