export interface PriceTier {
  id: string;
  duration: string;
  durationBn: string;
  price: number;
  popular?: boolean;
}

export interface PanelFeature {
  name: string;
  nameBn: string;
  safe: boolean;
}

export interface PanelItem {
  id: 'mobile' | 'pc' | 'ios';
  name: string;
  nameBn: string;
  subtitle: string;
  subtitleBn: string;
  categoryName: string;
  categoryNameBn: string;
  accentColor: 'cyan' | 'green' | 'blue';
  iconType: 'mobile' | 'pc' | 'ios';
  image: string;
  features: PanelFeature[];
  extraFeatures?: string[];
  extraFeaturesBn?: string[];
  prices: PriceTier[];
  compatibility: string;
  compatibilityBn?: string;
  version: string;
  status: 'Undetected' | 'Safe' | 'Updating' | 'Active';
  downloadUrl?: string;
}

export interface OrderDetails {
  panelId: 'mobile' | 'pc' | 'ios';
  panelName: string;
  duration: string;
  price: number;
  paymentMethod: 'bKash' | 'Nagad' | 'Rocket' | 'Binance' | 'Telegram';
  phone: string;
  trxId: string;
  gameUid: string;
}
