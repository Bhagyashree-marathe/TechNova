const generateHealthId = () => {
    const randomPart = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

    return `JHN-${randomPart}`;
};

module.exports = generateHealthId;