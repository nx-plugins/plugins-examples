var async = require("async");
const fs = require("fs");
console.time();

const files = [
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }, {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/_app.tsx',
        hash: '72c4be0b42034fd4ada1f5a4ba01578d4da75d09',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/inbox.tsx',
        hash: 'b53358c306d03aaacfcc05bd2afad15b367ac590',
        ext: '.tsx'
    },
    {
        file: 'apps/i18n-blog/pages/index.tsx',
        hash: 'a5bcaa4edd30e298a86b6c44e0bb7dc08b866a24',
        ext: '.tsx'
    },
    {
        file: 'libs/i18n/header/src/lib/i18n-header.tsx',
        hash: '3fdb770b8938c62b3f91c71d89c4b52c4a408ae1',
        ext: '.tsx'
    }
]
var result = [];

async.forEachOf(files, (value, key, callback) => {
    fs.readFile(value.file, "utf8", (err, data) => {
        if (err) return callback(err);
        try {
            result.push({ ...value, content: data });
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, err => {
    if (err) console.error(err.message);
    console.warn("Total files: " + result.length);
    // configs is now a map of JSON data
    console.timeEnd();
});
console.warn("aqui");

// files.forEach((value)=>{
//     const content = fs.readFileSync(value.file, "utf8");
//         result.push({...value,content});    
// });
// console.warn('configs',result);
// console.timeEnd(); 
