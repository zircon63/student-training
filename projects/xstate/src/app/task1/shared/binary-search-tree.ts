import { Node } from './node';


export type VisitFn<T> = (node: Node<T>, depth: number) => void;

export class BinarySearchTree<T> {
  private _root: Node<T>;

  public addNode(data: T): void {
    this._root = this.addNodeByRecursion(this._root, data);
  }

  public removeNode(data: T): void {
    this._root = this.removeNodeByRecursion(this._root, data);
  }

  public findNode(data: T): Node<T> | null {
    return this.findNodeByRecursion(this._root, data);
  }

  private addNodeByRecursion(currentNode: Node<T>, data: T): Node<T> {
    if (currentNode == null) {
      return new Node<T>(data);
    }
    if (data < currentNode.data) {
      currentNode.left = this.addNodeByRecursion(currentNode.left, data);
    } else if (data > currentNode.data) {
      currentNode.right = this.addNodeByRecursion(currentNode.right, data);
    } else if (data === currentNode.data) {
      currentNode.counter += 1;
    }
    return currentNode;
  }

  private removeNodeByRecursion(currentNode: Node<T>, data: T): Node<T> {
    if (currentNode == null) {
      return null;
    }
    if (data === currentNode.data) {
      if (currentNode.counter > 1) {
        currentNode.counter -= 1;
        return currentNode;
      }
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      } else if (currentNode.left != null && currentNode.right == null) {
        return currentNode.left;
      } else if (currentNode.left == null && currentNode.right != null) {
        return currentNode.right;
      } else {
        const smallestKey: T = this.findSmallestKey(currentNode.right);
        currentNode.data = smallestKey;
        currentNode.right = this.removeNodeByRecursion(currentNode.right, smallestKey);
        return currentNode;
      }
    } else if (data < currentNode.data) {
      currentNode.left = this.removeNodeByRecursion(currentNode.left, data);
    } else if (data > currentNode.data) {
      currentNode.right = this.removeNodeByRecursion(currentNode.right, data);
    }
    return currentNode;
  }

  private findSmallestKey(currentNode: Node<T>): T {
    return currentNode.left == null ? currentNode.data : this.findSmallestKey(currentNode.left);
  }

  private findNodeByRecursion(currentNode: Node<T>, data: T): Node<T> | null {
    if (currentNode == null) {
      return null;
    }
    if (data === currentNode.data) {
      return currentNode;
    } else if (data < currentNode.data) {
      return this.findNodeByRecursion(currentNode.left, data);
    } else if (data > currentNode.data) {
      return this.findNodeByRecursion(currentNode.right, data);
    }
  }

  symmetricOrder(visit: VisitFn<T>) {
    this.symmetricOrderRecursion(this._root, 0, visit);
  }

  inverseSymmetricOrder(visit: VisitFn<T>) {
    this.inverseSymmetricRecursion(this._root, 0, visit);
  }

  private symmetricOrderRecursion(currentNode: Node<T>, depth: number, visit: VisitFn<T>) {
    if (currentNode) {
      this.symmetricOrderRecursion(currentNode.left, depth + 1, visit);
      visit(currentNode, depth);
      this.symmetricOrderRecursion(currentNode.right, depth + 1, visit);
    }
  }

  private inverseSymmetricRecursion(currentNode: Node<T>, depth: number, visit: VisitFn<T>) {
    if (currentNode) {
      this.inverseSymmetricRecursion(currentNode.left, depth + 1, visit);
      this.inverseSymmetricRecursion(currentNode.right, depth + 1, visit);
      visit(currentNode, depth);
    }
  }
}
