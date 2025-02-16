# portfolio
My personal static portfolio site, built with Tailwind CSS and automated with GitHub Actions + node for deployment.

## Installation

**Install dependencies**  
   ```sh
   npm install
   ```

## Usage

### 🚧 Start Development Server

    npm run dev

This will:
* Compile Tailwind CSS in watch mode
* Start a Live Server at http://localhost:8080

### 🔨 Build for Production

    npm run build

This will:
* Generate a minified CSS file
* Copy HTML and JavaScript to public_html/ directory


### 🚀 Deployment with GitHub Actions

This project includes GitHub Actions to automatically:
1. Build the production-ready site
2. Deploy to a server via SCP
