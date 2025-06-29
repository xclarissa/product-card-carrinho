export const theme = {
    colors: {
        primary: '#007bff',
        danger: '#dc3545',
        background: '#f8f9fa',
        text: '#212529',
        muted: '#6c757d',
        white: '#ffffff',
        border: '#dee2e6',
    },
    fontSizes: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
    }, 
    spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
    }
}

export type ThemeType = typeof theme;