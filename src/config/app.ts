interface AppConfig {
    name: string;
    github: {
        title: string;
        url: string;
    };
    author: {
        name: string;
        url: string;
    };
}

export const appConfig: AppConfig = {
    name: 'Kaseer',
    github: {
        title: 'Kaseer',
        url: 'https://github.com/ynvrse/react-pwa-pos',
    },
    author: {
        name: 'ynvrse',
        url: 'https://github.com/ynvrse/',
    },
};
