export const createCatalogPaginationElement = () => {
  return (
    `<ul class="catalog__pagination pagination">
      <li class="pagination__item pagination__item--current">
        <a href="#">1</a>
      </li>
      <li class="pagination__item">
        <a href="#">2</a>
      </li>
      <li class="pagination__item">
        <a href="#">...</a>
      </li>
      <li class="pagination__item">
        <a href="#">7</a>
      </li>
      <li class="pagination__item pagination__item--button">
        <a href="#">Далее</a>
      </li>
    </ul>`
  );
};
