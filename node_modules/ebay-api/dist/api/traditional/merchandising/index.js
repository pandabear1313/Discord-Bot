var calls;
(function (calls) {
    calls[calls["getMostWatchedItems"] = 0] = "getMostWatchedItems";
    calls[calls["getRelatedCategoryItems"] = 1] = "getRelatedCategoryItems";
    calls[calls["getSimilarItems"] = 2] = "getSimilarItems";
    calls[calls["getVersion"] = 3] = "getVersion";
})(calls || (calls = {}));
export default calls;
