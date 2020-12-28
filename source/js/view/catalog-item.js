export const createCatalogItemElement = () => {
  return (
    `<li class="list__item">
      <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: 85%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">15</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>Честер Bass</h3>
        <p>17 500 ₽</p>
      </div>
      <div class="list__navigation-wrapper">
        <a href="" class="catalog__button--info catalog__button">Подробнее</a>
        <a href="" class="catalog__button--buy catalog__button">Купить</a>
      </div>
    </li>`
  );
};
