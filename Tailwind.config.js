module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#22d3ee',
        'quantum-pink': '#d946ef',
        'quantum-deep': '#050505',
      },
      animation: { 'pulse-slow': 'pulse 4s infinite' }
    },
  },
  plugins: [],
}