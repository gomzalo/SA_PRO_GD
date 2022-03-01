import {
    Injectable
} from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    gblUserCollection: AngularFirestoreCollection;
    gblBusinessCollection: AngularFirestoreCollection;
    gblProyectsCollection: AngularFirestoreCollection;
    gblBranchsCollection: AngularFirestoreCollection;

    constructor(
        private afStore: AngularFirestore,
    ) {
        this.gblUserCollection = this.afStore.collection('gbl_user');
        this.gblBusinessCollection = this.afStore.collection('gbl_business');
        this.gblProyectsCollection = this.afStore.collection('gbl_proyects');
        this.gblBranchsCollection = this.afStore.collection('gbl_branchs');
    }

    // *** Users ***

    getAdminsLenght() {
        const query = this.gblUserCollection.ref.where('roleType', '==', 2).where('status', '==', 1).get();
        return query;
    }

    getTechnicalsLenght() {
        const query = this.gblUserCollection.ref.where('roleType', '==', 4).where('status', '==', 1).get();
        return query;
    }

    getUsersLenght() {
        const query = this.gblUserCollection.ref.where('roleType', '==', 3).where('status', '==', 1).get();
        return query;
    }

    getUser(email: string) {
        const query = this.gblUserCollection.ref.where('email', '==', email);
        return query.get();
    }

    getUserByUid(uid: string) {
        const query = this.gblUserCollection.ref.where('uid', '==', uid);
        return query.get();
    }

    getUsersFilter(roles: any) {
        const query = this.gblUserCollection.ref.where('roleType', 'in', roles);
        return query.get();
    }

    getUsersFilterAssignedMachine(usersAssignedMachina: any) {
        const query = this.gblUserCollection.ref.where('uid', 'in', usersAssignedMachina);
        return query.get();
    }

    getUsersFilterCreateBy(uid: any) {
        const query = this.gblUserCollection.ref.where('createBy', '==', uid);
        return query.get();
    }

    getUsersFilterStatus(uid: any) {
        const query = this.gblUserCollection.ref.where('status', '==', 1);
        return query.get();
    }

    getUsersFilterCreateByAndRole(uid: any, usersRole) {
        const query = this.gblUserCollection.ref.where('createBy', '==', uid).where('roleType', '==', usersRole);
        return query.get();
    }

    getUsersFilterCreateByAndRoleTypes(uid: any, usersRole) {
        const query = this.gblUserCollection.ref.where('createBy', '==', uid).where('roleType', 'in', usersRole);
        return query.get();
    }

    getUsersFilterRoleTypes(usersRole: any, status: number) {
        const query = this.gblUserCollection.ref.where('roleType', 'in', usersRole).where('status', '==', status);
        return query.get();
    }

    getUsersAll() {
        return this.gblUserCollection.valueChanges();
    }

    createUser(user: any, uidAuth: any) {
        console.log(user);
        return this.gblUserCollection.doc(uidAuth).set(user);
        // return this.gblUserCollection.add(user);
    }

    updateUser(user: any, uid: any) {
        return this.gblUserCollection.doc(uid).update(user);
    }

    // / *** Users ***

    //// **** Business *** 

    createBusiness(info: any) {
        return this.gblBusinessCollection.add(info);
    }

    getBusinessAll() {
        return this.gblBusinessCollection.valueChanges();
    }

    getBusinessByCreated(uid: any) {
        const query = this.gblBusinessCollection.ref.where('createBy', '==', uid);
        return query.get();
    }

    getBusinessByUid(uid: string) {
        const query = this.gblBusinessCollection.ref.doc(uid);
        return query.get();
    }

    updateBusiness(user: any, uid: any) {
        return this.gblBusinessCollection.doc(uid).update(user);
    }

    //// **** Proyects *** 

    createProyects(info: any) {
        return this.gblProyectsCollection.add(info);
    }

    getProyectsAll() {
        return this.gblProyectsCollection.valueChanges();
    }

    getProyectsByCreated(uid: any) {
        const query = this.gblProyectsCollection.ref.where('createBy', '==', uid);
        return query.get();
    }

    getProyectsByUid(uid: string) {
        const query = this.gblProyectsCollection.ref.doc(uid);
        return query.get();
    }

    updateProyects(user: any, uid: any) {
        return this.gblProyectsCollection.doc(uid).update(user);
    }

    //// **** Branchs *** 

    createBranchs(info: any) {
        return this.gblBranchsCollection.add(info);
    }

    getBranchsAll() {
        return this.gblBranchsCollection.valueChanges();
    }

    getBranchsByCreated(uid: any) {
        const query = this.gblBranchsCollection.ref.where('createBy', '==', uid);
        return query.get();
    }

    getBranchsByUid(uid: string) {
        const query = this.gblBranchsCollection.ref.doc(uid);
        return query.get();
    }

    updateBranchs(user: any, uid: any) {
        return this.gblBranchsCollection.doc(uid).update(user);
    }

}