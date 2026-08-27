import { Component, input } from '@angular/core';
import { CartItem } from '../../shared/models/cart';
import { RouterLink } from '@angular/router';
import { MatButton, MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton,
    CurrencyPipe,
    MatAnchor,
    MatButton
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  item = input.required<CartItem>();
}
