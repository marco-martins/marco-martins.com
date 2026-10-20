# Marco Martins Website SSR

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Docker

Build and start the production application with Docker Compose:

```bash
docker compose up --build -d
```

Open `http://localhost:4000`. The container serves the Angular application and its
static assets through the Node SSR server, running as the non-root `node` user.

To use a different host port:

```bash
PORT=8080 docker compose up --build -d
```

The server always listens on port 4000 inside the container. The Docker image
includes a health check that requests the home page.

The Angular SSR host allowlist in `angular.json` includes `localhost`,
`127.0.0.1`, `marco-martins.com` and `www.marco-martins.com`. Add any additional
deployment hostnames to `security.allowedHosts` before rebuilding.

Check the service status and logs:

```bash
docker compose ps
docker compose logs -f website
```

Stop and remove the container:

```bash
docker compose down
```

The Dockerfile uses a multi-stage build with Node 24 and installs dependencies
using the committed `yarn.lock`. Only the compiled application is copied into the
runtime image. Rebuild the image after changing source files or assets.

### Production with Traefik

Use the production override to enable Traefik routing:

```bash
DOMAIN=marco-martins.com docker compose -f compose.yaml -f compose.prod.yaml up --build -d
```

Alternatively, define `DOMAIN=marco-martins.com` in a `.env` file and omit the
inline variable. `DOMAIN` is only required by the production override.

The production configuration removes the published host port with `!reset []`.
Traefik connects directly to port 4000 through the existing external Docker
network `traefik_network`. It uses the `websecure` entrypoint, TLS and the
`redirect-www-to-non-www@file` middleware already configured on the server.

Local development continues to use `docker compose up --build -d`, without
Traefik labels or an external network. No local override file is required.

### Remote deployment

```bash
bash deploy.sh
```

The script deploys only to `nas-webserver`, using `compose.yaml` and
`compose.prod.yaml`, including the Traefik configuration. It creates the
remote directory and synchronizes the project, preserving the server's `.env`
file. Set `DOMAIN=marco-martins.com` in the remote `.env` file and
ensure the Traefik network and middleware described above already exist.

If you confirm the container update, the script validates the Compose
configuration and builds the image before replacing the running container. It
then waits up to 60 seconds for the health check. A failed build leaves the
existing container running; a successful build still requires a brief restart
when the container is replaced. Failed startup or health checks cause the script
to exit with an error; there is no automatic rollback after replacement.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
