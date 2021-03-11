function getResultStatus(result){
    if (result.error) {
        return 500;
    }
    if (result.data?.length > 0){
        return 200;
    }
    if (result.data?.length === 0) {
        return 204;
    }
    return 500;
}

module.exports = getResultStatus;