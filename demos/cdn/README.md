# UI Library CDN Distribution 🚀

Use our component library just like **Stripe.js**, **Google Maps API**, or any modern web service - with a simple script tag!

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <!-- Your HTML content -->
  <ui-button variant="primary">Click me!</ui-button>
  <ui-input placeholder="Enter your email" type="email"></ui-input>
  
  <!-- Include UI Library (like Stripe or Google Maps) -->
  <script src="https://unpkg.com/ui-library@latest/dist/cdn/ui-library.min.js"></script>
</body>
</html>
```

## 🌟 Why Use CDN Distribution?

### ✅ **Zero Build Step**
- No npm, webpack, or build tools required
- Include one script tag and start using components
- Perfect for landing pages, prototypes, or simple websites

### ⚡ **Ultra Fast Loading**
- Optimized, minified bundle
- Served from global CDN (unpkg/jsdelivr)
- Cached across websites for faster subsequent loads

### 🌍 **Universal Compatibility**
- Works with any backend (PHP, Python, .NET, Java, etc.)
- No framework dependencies
- Compatible with vanilla HTML, WordPress, Jekyll, etc.

## 📦 Available CDN Links

```html
<!-- From unpkg (recommended) -->
<script src="https://unpkg.com/ui-library@latest/dist/cdn/ui-library.min.js"></script>

<!-- From jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/ui-library@latest/dist/cdn/ui-library.min.js"></script>

<!-- Specific version (recommended for production) -->
<script src="https://unpkg.com/ui-library@1.0.0/dist/cdn/ui-library.min.js"></script>
```

## 🎨 Available Components

### Buttons
```html
<ui-button variant="primary">Primary</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="outline">Outline</ui-button>
<ui-button variant="ghost">Ghost</ui-button>
<ui-button variant="destructive">Destructive</ui-button>

<!-- With sizes -->
<ui-button size="sm">Small</ui-button>
<ui-button size="md">Medium</ui-button>
<ui-button size="lg">Large</ui-button>

<!-- With states -->
<ui-button loading="true">Loading...</ui-button>
<ui-button disabled="true">Disabled</ui-button>
```

### Inputs
```html
<ui-input type="text" placeholder="Your name"></ui-input>
<ui-input type="email" placeholder="your@email.com" required="true"></ui-input>
<ui-input type="password" placeholder="Password"></ui-input>
<ui-input type="tel" placeholder="+1 (555) 123-4567"></ui-input>

<!-- With states -->
<ui-input error="true" value="Invalid input"></ui-input>
<ui-input disabled="true" value="Cannot edit"></ui-input>
```

### Cards
```html
<ui-card>
  <ui-card-header>
    <ui-card-title>Card Title</ui-card-title>
  </ui-card-header>
  <ui-card-content>
    <p>Card content goes here.</p>
    <ui-button variant="primary">Action</ui-button>
  </ui-card-content>
</ui-card>
```

## 🔧 JavaScript API

Once loaded, the library exposes a global `UILibrary` object:

```javascript
// Check if library is loaded
if (window.UILibrary) {
  console.log('UI Library version:', UILibrary.version);
  
  // Manually initialize components (usually not needed)
  UILibrary.defineCustomElements();
}

// Listen for component events
document.querySelector('ui-button').addEventListener('click', function(event) {
  console.log('Button clicked!', event.target);
});

// Dynamically create components
const button = document.createElement('ui-button');
button.setAttribute('variant', 'primary');
button.textContent = 'Dynamic Button';
document.body.appendChild(button);
```

## 🎯 Real-World Examples

### Landing Page Form
```html
<form id="signup-form">
  <ui-input type="email" placeholder="Enter your email" required="true" id="email"></ui-input>
  <ui-button variant="primary" type="submit">Get Started</ui-button>
</form>

<script>
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Signing up:', email);
  });
</script>
```

### Dashboard Widget
```html
<ui-card>
  <ui-card-header>
    <ui-card-title>User Settings</ui-card-title>
  </ui-card-header>
  <ui-card-content>
    <ui-input placeholder="Display name" value="John Doe"></ui-input>
    <ui-input type="email" placeholder="Email" value="john@example.com"></ui-input>
    <div style="margin-top: 16px;">
      <ui-button variant="primary">Save Changes</ui-button>
      <ui-button variant="ghost">Cancel</ui-button>
    </div>
  </ui-card-content>
</ui-card>
```

### E-commerce Product Card
```html
<ui-card>
  <ui-card-header>
    <ui-card-title>Premium Plan</ui-card-title>
  </ui-card-header>
  <ui-card-content>
    <div style="text-align: center;">
      <div style="font-size: 2rem; font-weight: bold;">$29/mo</div>
      <p>Everything you need to get started</p>
      <ui-button variant="primary" size="lg">Choose Plan</ui-button>
    </div>
  </ui-card-content>
</ui-card>
```

## 🔒 Content Security Policy (CSP)

If your site uses CSP, add these directives:

```
script-src 'self' unpkg.com cdn.jsdelivr.net;
style-src 'self' 'unsafe-inline';
```

## 📊 Bundle Size

- **Minified**: ~45KB
- **Gzipped**: ~12KB
- **Components**: All UI components included
- **Styles**: Tailwind CSS included

## 🆚 CDN vs NPM

| Feature | CDN Distribution | NPM Package |
|---------|-----------------|-------------|
| Setup | One script tag | Requires build tools |
| Bundle size | Fixed ~45KB | Tree-shakeable |
| Framework integration | HTML/Vanilla JS | React, Vue, Angular wrappers |
| Updates | Change CDN URL | npm update |
| Offline development | Need internet | Works offline |
| Best for | Landing pages, prototypes | Full applications |

## 🎯 When to Use CDN Distribution

✅ **Perfect for:**
- Landing pages and marketing sites
- WordPress, Jekyll, or static sites
- Quick prototypes and demos
- PHP, Python, .NET backends
- No-build-tool workflows

❌ **Consider NPM instead for:**
- Large React/Vue/Angular applications
- Need tree-shaking for smaller bundles
- Complex state management
- TypeScript projects (better IntelliSense)

## 🚀 Demo

See a full working demo: `index.html` in this directory

## 📚 Documentation

- [Storybook](http://localhost:49248) - Interactive component documentation
- [React Integration](../framework-packages/ui-library-react)
- [Vue Integration](../framework-packages/ui-library-vue) 
- [Angular Integration](../framework-packages/ui-library-angular)

---

**Just like Stripe or Google Maps - include one script and start building!** 🎉