exports.regions = () => {
    return "SELECT DISTINCT REGION FROM sales";
};

exports.countires = () => {
    return "SELECT DISTINCT COUNTRY FROM sales";
};

exports.item_types = () => {
    return "SELECT DISTINCT ITEM_TYPE FROM sales";
};

exports.totals_by_country = (country) => {
    return `SELECT Country, SUM(Units_Sold) as 'Units Sold', SUM(Total_Cost) as 'Total Cost', SUM(Total_Revenue) as 'Total Revenue', SUM(Total_Profit) as 'Total Profit' FROM sales WHERE Country = '${country}' GROUP BY Country`;
};

exports.totals_by_region = (region) => {
    return `SELECT Region, SUM(Units_Sold) as 'Units Sold', SUM(Total_Cost) as 'Total Cost', SUM(Total_Revenue) as 'Total Revenue', SUM(Total_Profit) as 'Total Profit' FROM sales WHERE Region = '${region}' GROUP BY Region`;
};

exports.item_type_by_country = (country) => {
    return `SELECT Item_Type as 'Item Type', SUM(Units_Sold) as 'Units Sold', SUM(Total_Cost) as 'Total Cost', SUM(Total_Revenue) as 'Total Revenue', SUM(Total_Profit) as 'Total Profit' FROM sales WHERE Country = '${country}' GROUP BY Item_Type`;
};

exports.item_type_by_region = (region) => {
    return `SELECT Item_Type as 'Item Type', SUM(Units_Sold) as 'Units Sold', SUM(Total_Cost) as 'Total Cost', SUM(Total_Revenue) as 'Total Revenue', SUM(Total_Profit) as 'Total Profit' FROM sales WHERE Region = '${region}' GROUP BY Item_Type`;
};
