# 🔗 React Custom Hook Library

A powerful, modular collection of reusable React custom hooks for UI, state, browser APIs, async data, and more — ready for production use.

---

## 📦 Installation

```bash
npm install @your-scope/react-hooks-lib
# or
yarn add @your-scope/react-hooks-lib

```

## 📦 Usage

```javascript
import { useDebounce, useLocalStorage, useWindowResize } from '@your-scope/react-hooks-lib';

const [name, setName] = useLocalStorage("username", "Guest");
const debouncedSearch = useDebounce(searchTerm, 300);
useWindowResize(() => console.log("Resized!"));
```


🧠 **Included Hooks**

# 📄 State & Data
useDebounce, useThrottle, useToggle, usePrevious
useLocalStorage, useSessionStorage, useCookie
useForm, useInput, useQueue

# 🖥️ UI & Events
useClickOutside, useHover, useScrollPosition
useDarkMode, useEventListener, useMediaQuery

# 🌐 Network & Async
useAbortableFetch, useAxios (coming), useOnlineStatus

# 🌍 Browser APIs
useClipboard, useGeolocation, useBattery

# 🧪 Debug & Dev Tools
useIsMounted, useWhyDidYouUpdate, useReducerWithMiddleware


**💡 Contributing**

Fork the repo

Add a hook under src/hooks/

Export it in index.js

Run tests and open a merge request!