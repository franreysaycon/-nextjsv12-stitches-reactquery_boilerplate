# NextJSv12 + Stitches + React Query Boilerplate by Franrey Saycon

## Let the magic begin~
You technically just need node+pnpm (used Node v18 LTS) and a good internet ;)

**To make all the nice things work properly, (installs everything you need and prepares commmit automations)**
```
pnpm install
pnpm prepare (if prepare wasn't ran properly)
```

**To turn on everything,**
```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The port maybe different if 3000 is occupied.

**To run tests,**
```
pnpm test
```

**To commit and trigger commitizen / lint staging,**
```
pnpm commit
```
TIP: I highly suggest you check your lint stage first with `pnpm lint-staged` since you might need to redo everything if a check failed. (sorta a punishment >:P).

**To release something and update the CHANGELOG automatically complete with tags,**
```
pnpm release
```

### What's included?
- a frontend-only SSR next boilerplate written everything in typescript
- forms with react-hook-forms and joi for schema validation.
- API integration with react-query.
- styling solution using stitches with theme setup and global styling. 
- common components for usual development.
- accessible and unstyled design framework with radixui
- jest setup with react-testing also written in typescript.
- playwright setup for e2e tests.
- repository automations with commitizen w/ lintstaged, husky, and commitlint.
