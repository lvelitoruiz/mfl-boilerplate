# UI Library Ecosystem - Setup Guide

## 🚀 Quick Start

### Option 1: Start Everything at Once
```bash
npm start
```
This starts all servers in parallel:
- Core UI Library: http://localhost:3333
- React Test App: http://localhost:3002  
- Angular Test App: http://localhost:4200
- Vue Test App: http://localhost:5173
- CDN Demo: http://localhost:8000

### Option 2: Start Individual Servers
```bash
# Core library (required first)
npm run start:core

# Individual test apps
npm run start:react
npm run start:angular  
npm run start:vue
npm run start:cdn
```

## 🔧 Development Workflow

### Making Changes to Components
1. Edit components in `core/ui-library/src/components/`
2. Changes will automatically:
   - Rebuild the core library
   - Copy updated files to all test app public folders
   - Hot reload in all running apps

### Adding New Components
1. Generate: `cd core/ui-library && npm run generate`
2. Build: `npm run build`
3. All test apps will automatically get the new components

### Building for Production
```bash
# Build core library only
npm run build

# Build everything including CDN
npm run build:all

# Setup everything from scratch
npm run setup
```

## 📁 Project Structure

```
├── core/ui-library/           # Main Stencil component library
│   ├── src/loader/            # Custom loader (won't be overwritten)
│   └── scripts/post-build.js  # Automation script
├── test-apps/                 # Framework test applications
│   ├── react-test-new/        # React integration
│   ├── angular-test/          # Angular integration  
│   └── vue-test/              # Vue integration
├── demos/cdn/                 # CDN demo (like Stripe.js)
└── framework-packages/        # Framework-specific wrappers
```

## 🔄 How It Works Now

### Permanent Solutions Implemented:

1. **Custom Loader**: Created in `src/loader/custom-loader.ts` that won't be overwritten
2. **Automated File Copying**: Post-build script automatically copies files to public folders
3. **Proper Dependencies**: React uses `import { defineCustomElements } from 'ui-library'`
4. **Development Scripts**: Easy commands for starting everything

### No More Manual Fixes Needed:
- ✅ CSS files automatically copied to public folders
- ✅ Loader paths automatically correct
- ✅ All frameworks work immediately after build
- ✅ Restarting servers won't break anything

## 🛠️ If Something Breaks

If you encounter issues:
1. Run `npm run setup` to rebuild everything
2. Check that all required folders exist
3. Ensure the post-build script ran successfully

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start all servers in parallel |
| `npm run build` | Build core library only |
| `npm run build:all` | Build everything including CDN |
| `npm run setup` | Full setup from scratch |
| `npm run start:core` | Start core library only |
| `npm run start:react` | Start React test app only |
| `npm run start:angular` | Start Angular test app only |
| `npm run start:vue` | Start Vue test app only |
| `npm run start:cdn` | Start CDN demo only |

## 🎯 Next Steps

The ecosystem is now fully automated and robust. You can:
1. Add new components without worrying about setup
2. Restart servers without manual fixes
3. Focus on building instead of configuration
4. Trust that all frameworks will work consistently

Happy coding! 🎉