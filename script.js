// Tailwind config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-dark': '#0F172A', // Biru Tua (Slate 900)
                'accent-orange': '#F97316', // Oranye Terang (Orange 600)
                'bg-light': '#F8FAFC',     // Latar Belakang Putih Kebiruan
                'text-muted': '#94A3B8'    // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
            }
        }
    }
};

// Initialize Lucide Icons
window.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});
