type CityState = {
  city: string;
};

type CityAction = {
  type: string;
  city: string;
};

type DispatchType = (args: CityAction) => CityAction;
