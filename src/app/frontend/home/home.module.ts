/**
 * This file is part of the TEKKL core package
 *
 * (c) Alexander Bachmann <email.bachmann@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '../shared/browser/browser.module';
import { BackgroundModule } from '../shared/background/background.module';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		BrowserModule,
		BackgroundModule
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule { }
