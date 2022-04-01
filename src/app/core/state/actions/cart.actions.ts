import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { BERespErrorModel } from '../../models/backend/BE-response-error.model';

export const upsertProduct = createAction('[Cart] upsertProduct', props<{ product: Product }>());
export const upsertMultipleProducts = createAction('[Cart] upsertMultipleProducts', props<{ products: Product[] }>());
export const deleteProduct = createAction('[Cart] deleteProduct', props<{ product: Product }>());
export const deleteAllProducts = createAction('[Cart] deleteAllProducts');
export const updateAllProducts = createAction('[Cart] updateAllProducts', props<{ products: Product[] }>());
export const loadProductDiscountsSuccess = createAction('[Cart] loadProductDiscountsSuccess', props<{ data: any }>());
export const loadProductDiscountsError = createAction('[Cart] loadProductDiscountsError', props<{ error: BERespErrorModel }>());
export const updateMinPurchase = createAction('[Cart] updateMinPurchase', props<{ minPurchase: number }>());
export const updateMinPurchaseReached = createAction('[Cart] updateMinPurchaseReached', props<{ minPurchaseReached: boolean }>());
export const updateVisitDate = createAction('[Cart] updateVisitDate', props<{ date: string }>());
export const updateFrozenVisitDate = createAction('[Cart] updateFrozenVisitDate', props<{ date: string }>());
export const updateInvoiceDeadline = createAction('[Cart] updateInvoiceDeadline', props<{ invoiceDeadline: string }>());
// export const setIsFirstDeliveryDate = createAction('[Cart] setIsFirstDeliveryDate', props<{ isFirstDeliveryDate: boolean }>());
export const confirmOrder = createAction('[Cart] confirmOrder');
export const cleanCart = createAction('[Cart] cleanCart');
export const updateHasDeliveryFrozenProducts = createAction('[Cart] updateHasDeliveryFrozenProducts');
export const upsertpaymentMethod = createAction('[Cart] upsertpaymentMethod', props<{ paymentMethod: string }>());
export const updateCartCredits = createAction('[Cart] updateCartCredits', props<{ credits: any }>());