# Contiamo JS Client

## Development

1. `yarn install`
2. `yarn run dev`
3. Open [http://localhost:8080](http://localhost:8080)

Make sure to have the `CORS origins` config pointing to `http://localhost:8080`.

## API

| Resource     | Create | List | Fetch / Retrieve | Modify | Destroy | Other actions   | Child Resources                           |
|--------------|--------|------|------------------|--------|---------|-----------------|-------------------------------------------|
| client       | x      |      |                  |        |         |                 | project                                   |
| project      |        |      | x                | x      |         | query, sqlQuery | app, dashboard, notebook, presentation    |
| dashboard    | x      | x    | x                | x      | x       |                 | widget                                    |
| widget       | x      | x    | x                | x      | x       | data            |                                           |
| app          |        | x    | x                | x      | x       |                 | contract, dimension                       |
| contract     | x      | x    | x                | x      | x       |                 |                                           |
| dimension    |        | x    | x                |        |         | values          |                                           |
| notebook     | x      | x    | x                | x      | x       | execute         |                                           |
| presentation | x      | x    | x                | x      | x       |                 |                                           |
