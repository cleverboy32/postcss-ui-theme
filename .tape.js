
module.exports = {
	'postcss-ui-theme': {
		'basic': {
            message: 'supports basic like sass usage',
        },
        'bem': {
            message: 'supports bem usage',
            options: {
                defaultNamespace: 'awsome',
            }
        },
        'variables': {
            message: 'supports css4 variables usage',
        },
        'assets': {
            message: 'supports config asstets path to reslove file',
            options: {
                assets: {
                    basePath: './images',
                    relative: true
                }
            }
        }
    }
};