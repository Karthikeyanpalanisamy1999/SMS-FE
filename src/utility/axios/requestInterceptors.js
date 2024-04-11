
export const successRequestInterceptors = (config) =>{
        const {REACT_APP_API_ENDPOINT} = process.env

        const baseurl = REACT_APP_API_ENDPOINT || 'http://localhost:8000'

        console.info('BASE_URL',baseurl)

        if(config.url.startwith('http'))
        {
            throw new Error('Bad input')
        }

        const updateConfig = {
            ...config,
            url:`${baseurl}/${config.url}`
        }
        return updateConfig
}

export const errorRequestInterceptor = (error) => Promise.reject(error)