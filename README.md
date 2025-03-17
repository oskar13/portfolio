# portfolio
My personal portfolio site, built with Tailwind CSS, [Next.js](https://nextjs.org) and automated with GitHub Actions + npm for deployment. Next.js output mode is set to export mode for generating a static site with no need for a node.js runtime when hosting the site.


## Installation

**Install dependencies**  

    npm install


## Usage

### 🚧 Start Development Server

    npm run dev

This will:
* Run Turbopack
* Start a Dev Server at http://localhost:3000

### 🔨 Build for Production

    npm run build

This will generate a static export of the site in the /out directory that can be hosted on any plain HTTP server.



### 🚀 Deployment with GitHub Actions

This project includes GitHub Actions to automatically:
1. Build the production-ready site
2. Deploy to a server via SCP



