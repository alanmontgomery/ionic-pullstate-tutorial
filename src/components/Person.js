import { IonAvatar, IonButton, IonItem, IonLabel } from "@ionic/react";

export const Person = ({ person }) => {

	return (

		<IonItem lines="full">
			<IonAvatar>
				<img src={ person.avatar } alt="avatar" />
			</IonAvatar>
			<IonLabel className="ion-padding-start">
				<h1>{ person.name }</h1>
				<p>{ person.title }</p>
			</IonLabel>

			<IonButton color="primary" fill={ person.following ? "solid" : "outline" }>
				{ person.following ? "Following" : "Follow" }
			</IonButton>
		</IonItem>
	);
}