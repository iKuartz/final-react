export const setSession = (session) => {
    const str = JSON.stringify(session)
    localStorage.setItem('session', str)
}

export const getSession = () => {
    const log = localStorage.getItem('session')
    return JSON.parse(log)
}
